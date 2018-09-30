huoqu.onchange = function (e) {
    let formData = new FormData()
    formData.append(upload.inputName, e.target.files[0])
    this.willupload(formData)
    this.upload(formData)

}