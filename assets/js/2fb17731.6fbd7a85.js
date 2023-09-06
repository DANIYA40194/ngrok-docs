"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[49530],{65808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(51163),o=(n(59496),n(49613));const r={description:"Develop and test Chargify webhooks from localhost"},i="Chargify Webhooks",l={unversionedId:"integrations/chargify/webhooks",id:"integrations/chargify/webhooks",title:"Chargify Webhooks",description:"Develop and test Chargify webhooks from localhost",source:"@site/docs/integrations/chargify/webhooks.md",sourceDirName:"integrations/chargify",slug:"/integrations/chargify/webhooks",permalink:"/docs/integrations/chargify/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/chargify/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test Chargify webhooks from localhost"},sidebar:"docs",previous:{title:"Chargify",permalink:"/docs/integrations/chargify/"},next:{title:"CircleCI",permalink:"/docs/integrations/circleci/"}},s={},p=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate Chargify",id:"setup-webhook",level:2},{value:"Run Webhooks with Chargify and ngrok",id:"run-webhooks-with-chargify-and-ngrok",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3},{value:"Secure webhook requests",id:"security",level:2}],h={toc:p},k="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(k,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chargify-webhooks"},"Chargify Webhooks"),(0,o.kt)("hr",null),(0,o.kt)("admonition",{title:"TL;DR",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To integrate Chargify webhooks with ngrok:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"npm start")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure Chargify webhooks with your ngrok URL.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#security"},"Secure your webhook requests with verification.")))),(0,o.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with Chargify by using Webhooks.\nChargify webhooks can be used to notify an external application whenever specific events occur in your Chargify account."),(0,o.kt)("p",null,"By integrating ngrok with Chargify, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Develop and test Chargify webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from Chargify")," in real-time via the inspection UI and API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modify and Replay Chargify Webhook requests")," with a single click and without spending time reproducing events manually in your Chargify account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Secure your app with Chargify validation provided by ngrok"),". Invalid requests are blocked by ngrok before reaching your app.")),(0,o.kt)("h2",{id:"start-your-app"},(0,o.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,o.kt)("p",null,"For this tutorial, we'll use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,o.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,o.kt)("p",null,"This will get the project installed locally."),(0,o.kt)("p",null,"Now you can launch the app by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.kt)("p",null,"The app runs by default on port 3000."),(0,o.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser."),(0,o.kt)("h2",{id:"start-ngrok"},(0,o.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,o.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Chargify).\n",(0,o.kt)("img",{alt:"ngrok agent running",src:n(84162).Z,width:"962",height:"479"})))),(0,o.kt)("h2",{id:"setup-webhook"},(0,o.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate Chargify"),(0,o.kt)("p",null,"To register a webhook on your Chargify account follow the instructions below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access ",(0,o.kt)("a",{parentName:"p",href:"https://www.chargify.com/"},"Chargify")," and sign in using your Chargify account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the home page, select a site from the ",(0,o.kt)("strong",{parentName:"p"},"Site")," dropdown on the top of the page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the site page, click ",(0,o.kt)("strong",{parentName:"p"},"Config"),", click ",(0,o.kt)("strong",{parentName:"p"},"Settings"),", and then click ",(0,o.kt)("strong",{parentName:"p"},"Webhooks"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Webhooks")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Add New Endpoint"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Add New Endpoint")," page, enter the URL provided by the ngrok agent to expose your application to the internet in the ",(0,o.kt)("strong",{parentName:"p"},"Webhook URL")," field (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),").\n",(0,o.kt)("img",{alt:"URL to Publish",src:n(70692).Z,width:"1239",height:"1101"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Events")," you want to subscribe this webhook. For this tutorial, select all.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add"),"."))),(0,o.kt)("h3",{id:"run-webhooks-with-chargify-and-ngrok"},"Run Webhooks with Chargify and ngrok"),(0,o.kt)("p",null,"Chargify sends different request body contents depending on the event that is being triggered.\nFollow the instructions below to test connectivity between Chargify and your local application using the webhook you created."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access your Chargfy's site home page, click ",(0,o.kt)("strong",{parentName:"p"},"Tools")," on the left menu and then click ",(0,o.kt)("strong",{parentName:"p"},"Webhook Testing"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Webhook Testing")," page, select one of the events you subscribed the webhook, select the webhook, and then click ",(0,o.kt)("strong",{parentName:"p"},"Send"),"."),(0,o.kt)("p",{parentName:"li"},"Confirm your localhost app receives the create-project event notification and logs both headers and body in the terminal."))),(0,o.kt)("p",null,"Optionally, you can verify the log of the webhook call in Chargify:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the left menu, click ",(0,o.kt)("strong",{parentName:"p"},"Tools")," and then click ",(0,o.kt)("strong",{parentName:"p"},"Webhook Panel"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Webhooks")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Details")," to see details of the webhook call.\n",(0,o.kt)("img",{alt:"Webhook Logs",src:n(84020).Z,width:"1130",height:"498"})))),(0,o.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,o.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,o.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,o.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,o.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,o.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,o.kt)("p",null,"To inspect Chargify's webhooks call, launch the ngrok web interface (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),"), and then click one of the requests sent by Chargify."),(0,o.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ngrok Request Inspector",src:n(50553).Z,width:"2461",height:"1128"})),(0,o.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,o.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Chargify. To replay a request:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from Chargify.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,o.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you choose to ",(0,o.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,o.kt)("strong",{parentName:"p"},"id")," field inside the body of the request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,o.kt)("p",null,"Verify that your local application receives the request and logs the corresponding information to the terminal."),(0,o.kt)("h2",{id:"security"},"Secure webhook requests"),(0,o.kt)("p",null,"The ngrok signature webhook verification feature allows ngrok to assert that requests from your Chargify webhook are the only traffic allowed to make calls to your localhost app."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,o.kt)("p",null,"This is a quick step to add extra protection to your application."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access your Chargfy's site home page and click ",(0,o.kt)("strong",{parentName:"p"},"Edit current Site")," from the Site dropdown menu on top of the page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Site")," page, copy the value of the ",(0,o.kt)("strong",{parentName:"p"},"Site Shared Key"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart your ngrok agent by running the command, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"{your site shared key}")," with the value you have copied before:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook chargify --verify-webhook-secret {your site shared key}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the ",(0,o.kt)("strong",{parentName:"p"},"Webhook Testing")," page and send a new test notification to your webhook."))),(0,o.kt)("p",null,"Verify that your local application receives the request and logs information to the terminal."))}g.isMDXComponent=!0},50553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ngrok_introspection_chargify_webhooks-34fcba11189f4da740757e722a8aa32d.png"},84020:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ngrok_logs_chargify-e96eb5e79479c35abf558c285bbeddac.png"},70692:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ngrok_url_configuration_chargify-2b49e992e8ce1f0a0c8a048bf0088654.png"},84162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);