let index = 0;

function getNewFileId() {
	return Date.now() + String(index++);
}

export function pathToBase64(path : string): Promise<string> {
	return new Promise(function (resolve, reject) {
		if (typeof window === "object" && "document" in window) {
			if (typeof FileReader === "function") {
				var xhr = new XMLHttpRequest();
				xhr.open("GET", path, true);
				xhr.responseType = "blob";
				xhr.onload = function () {
					if (this.status === 200) {
						let fileReader = new FileReader();
						fileReader.onload = function (e : any) {
							resolve(e.target.result);
						};
						fileReader.onerror = reject;
						fileReader.readAsDataURL(this.response);
					}
				};
				xhr.onerror = reject;
				xhr.send();
				return;
			}
			var canvas = document.createElement("canvas");
			var c2x = canvas.getContext("2d");
			var img = new Image();
			img.onload = function () {
				canvas.width = img.width;
				canvas.height = img.height;
				c2x?.drawImage(img, 0, 0);
				resolve(canvas.toDataURL());
				canvas.height = canvas.width = 0;
			};
			img.onerror = reject;
			img.src = path;
			return;
		}
		reject(new Error("not support"));
	});
}

export function base64ToPath(base64 : string) {
	return new Promise(function (resolve, reject) {
		var extName = base64.match(/data\:\S+\/(\S+);/) || 'jpg';
		if (extName) {
			extName = extName[1];
		} else {
			reject(new Error("base64 error"));
		}
		var fileName = getNewFileId() + "." + extName;
		// @ts-ignore
		if (typeof wx === "object" && wx.canIUse("getFileSystemManager")) {
			// @ts-ignore
			var filePath = wx.env.USER_DATA_PATH + "/" + fileName;
			// @ts-ignore
			wx.getFileSystemManager().writeFile({
				filePath: filePath,
				data: base64.replace(/^data:\S+\/\S+;base64,/, ""),
				encoding: "base64",
				success: function () {
					resolve(filePath);
				},
				fail: function (error:any) {
					reject(error);
				},
			});
			return;
		}
		reject(new Error("not support"));
	});
}
