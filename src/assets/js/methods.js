import axios from "axios";

export default function getCurrentTimestamp() {
    const timestamp = new Date().getTime();
    return timestamp;
}


