import { environment } from 'src/environments/environment';


export class AppSettings {
    public static API = {
        GET_CALENDAR_DETAILS:environment.apiUrl + '/fetch',
        POST_CALENDAR_DATA:environment.apiUrl+'/post' 
    }
}