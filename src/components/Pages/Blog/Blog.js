import React from 'react';
import Footer from '../Shared/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold mb-10'>Welcome to Our Daily JS blog</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-success rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-success rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.
                        <br />

                        JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-success rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-success rounded-box mb-40">
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?

                </div>
                <div className="collapse-content">
                    <p>We are know that Node.js only processes one request at a time using a single thread and an event loop (which is non-blocking). However, how does that operate, let's say there are 10,000 simultaneous queries. Will the event loop complete all of the requests? That might take too much time.

                        How it can be quicker than a multi-threaded web server is something I do not fully understand (yet). I understand that a web server with several threads will cost more to run in terms of memory and CPU, but wouldn't it still be faster? Please clarify why this single-thread is faster in handling many requests and what it generally does (high level) when handling many queries, such as 10,000. </p>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Blog;