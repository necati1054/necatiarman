import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Necati Arman Blog</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet"/>
      <script data-ad-client="ca-pub-2037585543989384" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Head> 
    <div className="hero">
      <h1 className="hero-title">Necati ARMAN</h1>
      <div className="hero-social-links">
        <Link href="https://www.instagram.com/necati_arman_offical/">
          <a className="social-link">Instagram</a>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100003946455226">
          <a className="social-link">facebook</a>
        </Link>
        <div className="hakkında">            
          <a href="/about" className="hakkındayazı">Hakkında</a>
        </div>
      </div>
    </div>
    {posts.map(post => (
      <div className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
      </div>
    ))}

    <style jsx>{`
      .container {
        margin: 0 auto;
        font-family: 'Indie Flower', cursive;
        background-color:#ebc8b2;
      }
      .hero{
        text-align: center;
        margin -20px 0 0 0 ;
        background-color: #808080;
      }
      .social-link {
        margin-right: 8px;
        color:black;
      }
      .hero-title {
        font-size: 48px;
      }
      a {
        color: #ff6200;
        text-decoration: none;
      }
      .hakkında{
        weight:auto;
        height:40px;
        background-color: #e5b79a;
        border-radius: 8px;
        max-width: 650px;
        margin: auto;
      }
      .hakkındayazı{
        text-align: center;
        color: black;
      }
      .blog{
        background-color: red;
        max-width: 650px;
        margin: auto;
      }
    `}</style>
  </div>
);
Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://necatiarman.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
