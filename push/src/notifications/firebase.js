
import { initializeApp } from "firebase/app";
import { getMessaging , getToken} from "firebase/messaging";



const firebaseConfig = {
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generteToken=async ()=>{
    const permission=await Notification.requestPermission();
    console.log(permission)
    if(permission==="granted"){

        const token = await getToken(messaging,{
            vapidKey:"",
        } );
        console.log(token);
    }
}