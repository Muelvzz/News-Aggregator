export default function ErrorScreen() {
    return (
        <>
            <div 
                className="error-screen"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: "2rem",
                }}
            >
                <h1>There's something wrong in your backend</h1>
            </div>
        </>
    )
}