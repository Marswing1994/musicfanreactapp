import React from "react";
import Footer from "../components/Footer";

{/* Billie official blue hex: #15162e */}
    
{/* Billie official orange hex: #fda037 */}

function Home() {
  return (
    <div className="App">
      <img src="./images/other/banner.png" alt="Hit Me Hard and Soft Banner" class="w-screen"/>
      <div class="bg-[#909485]">
        <h1 class="text-4xl font-gabarito pt-5 text-white">Welcome to the Ultimate Billie Eilish Fan Experience!</h1>
        <br />
        <p class="p-10 text-gray-600 text-lg">This site is your one-stop destination to celebrate and explore the extraordinary journey of Billie Eilish. Whether you're a lifelong fan or just discovering her music, we aim to bring you closer to the artist whose unique style, emotive lyrics, and genre-defying sound have captivated audiences worldwide. Here, you’ll find a deep dive into Billie’s life and career, from her humble beginnings in Los Angeles to becoming a global music sensation. Learn about her creative process, her collaborations, and the milestones that have shaped her artistic evolution. <br /><br />
      
Delve into Billie’s discography and explore her groundbreaking albums and hit singles. We’ve highlighted her most popular songs, complete with insights into their lyrics and impact on the music industry. Join a vibrant community of fans who share your admiration and stay updated with the latest news, events, and releases. Don’t forget to sign up for our fan newsletter using our contact form to ensure you never miss an update. This is more than a fan site—it’s a celebration of Billie Eilish, her music, and the connection she shares with her fans. Let’s experience the magic together!  </p>
        </div>
      <Footer />
    </div>
  );
}

export default Home;