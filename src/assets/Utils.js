export class LinkGetManager {
    static getParameter(name) {
        try {
            let url = window.location.toString();
            console.log("DEBUG 1 " + url)
            console.log("DEBUG 1.2 " + name)
            let regex = new RegExp(`\\?${name}=([^?#&]+)`)
            // let regex = new RegExp("\?releaseID=.+?(?=\?)").toString();
            console.log("DEBUG 2")
            let match = regex.exec(url);
            console.log("DEBUG 2.5")
            if (match) {
                console.log("DEBUG 2a: " + match[0])
                return match[0].split("=")[1]
            }
            console.log("DEBUG 2b")
            return undefined;
        } catch(error) {
            console.error(error.message)
        }


    }
}
