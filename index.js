const fs = require("node:fs")

console.log("Renaming files...")

const renameFiles = () => {
    try {
        const [err, files] = fs.readdirSync("/videos")
        if (err) throw new Error(err.message)
        // let counter = 0
        files.forEach((file) => {
            const err = fs.renameSync(`./videos/${file}`, `./videos/${file.substring(3)}`)
            if(err) throw new Error(err.message)
        })
        console.log(`${files.length} files renamed successfully!`)
    } catch (error) {
        console.log(error.message)
    }
}
// Reading files in directory
fs.readdir("./videos", (err, files) => {
    if (err) {
        console.log(err.message)
    } else {
        // Renaming files
        let counter = 0
        files.forEach((file) => {
            // console.log(file.substring(3))
            fs.rename(`./videos/${file}`, `./videos/${file.substring(3)}`, (err) => {
                if (err) {
                    console.log(err.message)
                } else {
                    counter += 1
                    console.log(`${counter} ${counter === 1 ? "file" : "files"} renamed successfully`)
                }
            })
        })
    }
})
