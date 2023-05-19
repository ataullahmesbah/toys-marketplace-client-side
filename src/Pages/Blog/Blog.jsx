

const Blog = () => {
    return (

        <div className='container mx-auto px-4 mb-10'>
            <h4 className='text-4xl font-bold text-center mt-7 mb-10'>Questions and Answer:</h4>

            <div className='sm:flex sm:flex-wrap -mx-2'>
                <div className='sm:w-1/2 px-2 mb-4'>
                    <div className='bg-white rounded-lg shadow-md p-8 h-full'>
                        <h4 className='text-2xl font-semibold mb-4'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                        <p> <span className="font-medium">An access token: </span>
                            An access token is a credential that is used to authenticate and authorize requests made to protected resources, typically by an API.
                            <br />
                            <span className="font-medium">A refresh token: </span>
                            A refresh token is a credential that is used to obtain a new access token once the current access token expires. It is a long-lived token with a longer expiration period compared to the access token.
                            <br />
                            <span className="font-medium">On the client-side: </span>
                            On the client-side, both the access token and refresh token should be securely stored. Best practices include storing them in a secure HTTP-only cookie or in browser storage mechanisms such as local storage or session storage.
                        </p>
                    </div>
                </div>

                <div className='sm:w-1/2 px-2 mb-4'>
                    <div className='bg-white rounded-lg shadow-md p-8 h-full'>
                        <h4 className='text-2xl font-semibold mb-4'>Compare SQL and NoSQL databases?</h4>
                        <p ><span className="font-medium text-xl">SQL Databases: </span>
                            <li>Are vertically scalable and excel in complex queries and transactions.</li>
                            <li>Follow a structured relational data model with predefined schemas.
                            </li>
                            <br />
                            <span className="font-medium text-xl">NoSQL Databases: </span>
                            <li>Use various flexible data models and have no fixed schemas.</li>
                            <li>Are horizontally scalable and optimized for handling large volumes of data and high traffic loads.
                            </li>
                        </p>
                    </div>
                </div>

                <div className='sm:w-1/2 px-2 mb-4'>
                    <div className='bg-white rounded-lg shadow-md p-8 h-full'>
                        <h4 className='text-2xl font-semibold mb-4'>What is express js? What is Nest JS?</h4>
                        <p> <span className="font-medium text-xl">Express.js: </span> <br /> Express.js is a minimalistic and flexible web application framework for Node.js, used to build web applications and APIs. It allows developers to create server-side applications using JavaScript and provides an easy-to-use interface for building scalable </p>
                        <br />
                        <span className="font-medium text-xl">NestJS: </span>
                        <br />
                        NestJS is a progressive Node.js framework built on top of Express.js, providing structure and organization for building efficient and scalable server-side applications. NestJS utilizes TypeScript as its primary language and offers features like dependency injection, decorators, modules, and providers, which promote modularity and testability.
                    </div>
                </div>

                <div className='sm:w-1/2 px-2 mb-4'>
                    <div className='bg-white rounded-lg shadow-md p-8 h-full'>
                        <h4 className='text-2xl font-semibold mb-4'>What is MongoDB aggregate and how does it work?</h4>
                        <p>
                        <span className="font-medium">MongoDB</span> aggregate is a pipeline-based framework for advanced data processing and analysis within the database, allowing operations like filtering, grouping, sorting, and computing aggregate values. It enables complex data transformations and aggregations in a single query.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;