import express from 'express';
import webpush from "web-push"
import { newsrouter} from '../routecontroler/controlerfun.js'
const vapidKeys = webpush.generateVAPIDKeys()

const route=express.Router()

route.get('/newsdetails', newsrouter )

// Notification route 

// const publicVapidKey ="BFsj4NNlLMuhKW0BUCgAd8gpuRznuNRcI3GkQnO3xB6niYsAjKQI5p8Zf-PdIY74jRyTuWUDoqxGZJx58uRZXgI";
// const privateVapidKey = "======================================= ";
webpush.setVapidDetails("mailto:test@test.com",
vapidKeys.publicKey,vapidKeys.privateKey);
route.post("/subscribe", (req, res) => {
const { subscription, title, message } = req.body;
const payload = JSON.stringify({ title, message });
webpush.sendNotification(subscription, payload)
.catch((err) => console.error("err", err));
res.status(200).json({ success: true });
});

export default route ;