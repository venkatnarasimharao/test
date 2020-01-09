import { environment } from 'src/environments/environment';


export class AppSettings {
    public static API = {
        USER_LOGIN:environment.apiUrl+'/userlogin',
        GET_CALENDAR_DETAILS:environment.apiUrl + '/fetch',
        POST_CALENDAR_DATA:environment.apiUrl+'/postCalendarData',
        DELETE_CALENDAR_DATA:environment.apiUrl+'/deleteCalendar',
        USER_DOCS:environment.apiUrl+'/uploaddoc'
    }
}