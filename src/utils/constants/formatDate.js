import { formatInTimeZone } from "date-fns-tz"

export const formatDate = (date) =>{
    if(!date) return ""
    return formatInTimeZone(date, "Asia/Kolkata", "dd MMM yyyy HH:mm:ss")
}