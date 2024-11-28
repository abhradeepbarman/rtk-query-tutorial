import { FormEvent, useState } from "react";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";

function App() {
    const { data, isLoading } = useGetPostsQuery();
    const [newPost] = useNewPostMutation();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const post: Post = {
            title,
            body,
            id: (Math.random() * 10000).toString(),
        };

        newPost(post);
        setTitle("");
        setBody("");
    };

    return (
        <div>
            <h1>My App</h1>

            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />{" "}
                <br />
                <br />
                <input
                    type="text"
                    name="body"
                    placeholder="Enter Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />{" "}
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>

            {data?.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
