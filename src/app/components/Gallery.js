// // Components/Gallery.js

// import  { useState } from "react";
// import { AiOutlineExpandAlt } from "react-icons/ai";
// import Lightbox from "yet-another-react-lightbox";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/styles.css";

// const Gallery = () => {
//   const [open, setOpen] = useState(false);
//   const [image, setImage] = useState("");

//   const galleryTab = [
// // you can add more image if you want
//     {
//       imageUrl: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/581248397439672320/a2a58d740ee29a9e393e2d1da5fa3bbe.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20231109%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231109T143610Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=28327583e415e84823435c2fadf9eb18316d6b959ed35fb9c3b62e7a6b808a44",
//       type: "Nature",
//       title: "Beautiful Work",
//     },
//     {
//       imageUrl: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/581248397439672320/a65a9ee054a26d933a6e0241d8ffce23.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20231109%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231109T144214Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=e6db2a948b029e4b39678e28c43d3524216974dc01797cde9c5f2be535bab5da",
//       type: "Nature",
//       title: "Beautiful Work",
//     },
//     {
//       imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg",
//       type: "Nature",
//       title: "Beautiful Work",
//     },
//     {
//       imageUrl: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/581248397439672320/dfdcc0e214a1aa628563fd239e47adf7.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20231109%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231109T144409Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=d70ce194cb0780d6a61f30d434c7ff8daf68f6511b186d9019772f23f82d2fd5",
//       type: "Nature",
//       title: "Beautiful Work",
//     },
//     {
//       imageUrl: "https://themewagon.github.io/snapshot/images/model-5.jpg",
//       type: "Nature",
//       title: "Beautiful Work",
//     },
//   ];



//   const slides = galleryTab.map((item) => ({
//     src: item.imageUrl,
//     width: 3840,
//     height: 2560,
//     srcSet: [
//       { src: item.imageUrl, width: 320, height: 213 },
//       { src: item.imageUrl, width: 640, height: 426 },
//       { src: item.imageUrl, width: 1200, height: 800 },
//       { src: item.imageUrl, width: 2048, height: 1365 },
//       { src: item.imageUrl, width: 3840, height: 2560 },
//     ],
//   }));

//   return (
//     <div className="w-full">
//       <div className=" ">
//         <div className="flex flex-col md:grid md:grid-cols-3 h-full gap-0 flex-wrap mx-2 md:mx-0">
//           {galleryTab.map((x, index) => {
//             return (
//               <div key={index} className="md:h-[50vw] h-screen relative">
//                 <div className="group h-full">
//                   <div
//                     className="bg-cover bg-center h-full w-full bg-no-repeat"
//                     style={{ backgroundImage: `url("${x.imageUrl}")` }}
//                   >
//                     <div className="text-3xl text-white absolute bottom-0 left-2 z-10">
//                       <div>{x.type}</div>
//                       <div>{x.title}</div>
//                     </div>
//                   </div>
//                   <div
//                     className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
//                     onClick={() => {
//                       setOpen(true);
//                       setImage(x.imageUrl);
//                     }}
//                   >
//                     <p className="text-white">
//                       <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         plugins={[Zoom]}
//         showPrevNext={false}
//         slides={slides}
//       />
//     </div>
//   );
// };

// export default Gallery;



// Components/Gallery.js
"use client"; //

import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import './Gallary.css'
const Gallery = () => {
 const [open, setOpen] = useState(false);
 const [image, setImage] = useState("");
 const galleryTab = [
   {
     imageUrl: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/581248397439672320/a2a58d740ee29a9e393e2d1da5fa3bbe.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20231109%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231109T143610Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=28327583e415e84823435c2fadf9eb18316d6b959ed35fb9c3b62e7a6b808a44",
     type: "Nature",
     title: "Beautiful Work 1",
   },
   {
     imageUrl: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/581248397439672320/a65a9ee054a26d933a6e0241d8ffce23.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20231109%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231109T144214Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=e6db2a948b029e4b39678e28c43d3524216974dc01797cde9c5f2be535bab5da",
     type: "Nature",
     title: "Beautiful Work 2",
   },
   {
     imageUrl: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/581248397439672320/dfdcc0e214a1aa628563fd239e47adf7.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20231109%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20231109T144409Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=d70ce194cb0780d6a61f30d434c7ff8daf68f6511b186d9019772f23f82d2fd5",
     type: "Nature",
     title: "Beautiful Work 3",
   },
   {
     imageUrl: "https://example.com/image4.jpg",
     type: "Nature",
     title: "Beautiful Work 4",
   },
   // Add more image objects as needed
 ];

 const handleImageClick = (imageUrl) => {
   
 };

 return (
    <div>
      {/* <AppBar position="static" style={{ backgroundColor: "pink" }}>
        <Toolbar>
          <Typography variant="h6" style={{ textAlign: "center", width: "100%" }}>
            My Gallery
          </Typography>
        </Toolbar>
      </AppBar> */}

      <Grid container spacing={2}>
        {galleryTab.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              onClick={() => handleImageClick(image.imageUrl)}
              className="image-card" // Apply a CSS class for styling
            >
              <div
                style={{
                  backgroundImage: `url(${image.imageUrl})`,
                  height: "800",
                }}
                className="image-content" // Apply a CSS class for styling
              >
                <CardContent>
                  <div>{image.type}</div>
                  <div>{image.title}</div>
                </CardContent>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
      {open && (
        <div>
          <div className="lightbox">
            <img src={image} alt="Enlarged" />
            <AiOutlineExpandAlt
              className="close-button"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;