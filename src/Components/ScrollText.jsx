import React from "react";

const MarqueeBanner = () => {
  return (
    <marquee
      style={{
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        background: "linear-gradient(45deg, #4CAF50, #2E8B57)",
        padding: "12px",
        borderRadius: "8px",
        border: "2px solid #fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        display: "block",
        width: "100%",
      }}
    >
      আমাদের স্টকে চলে এসেছে জৈব ও ভার্মি মিক্সড পায়েল সার খুচরা প্রতি কেজি ৪০৳ 
      | আপনার বারান্দা কিংবা ছাদে যে কোন ধরনের মেটাল রেক কাস্টমাইজড করে নিতে যোগাযোগ করুন ইনবক্সে অথবা হোয়াটসঅ্যাপ এ 
      | আপনার বাগান সাজাতে প্রয়োজনীয় মেটাল রেক, বীজ, সার, মাটি অথবা ইনডোর প্লান্ট নিতে যোগাযোগ করুন ইনবক্সে
    </marquee>
  );
};

export default MarqueeBanner;
