import useFetch from "../../../hooks/useFetch";

const Posts = () => {
    const { data, isLoading, error, fetchNow } = useFetch({
        url: 'http://localhost:7070/posts'
    });
    console.info(data);
    

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div>
                {data && data.map((item) => (
                    <div key={item.id}>{/* Assuming there's an 'id' property */}
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;

