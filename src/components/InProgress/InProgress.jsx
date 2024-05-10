import Frame from "../Frame/Frame";

function InProgress() {
    return (
        <main className="in-progress">
            <Frame
            width={500}
            height={200}
            >
                <h1 className="in-progress__message">В разработке...</h1>
            </Frame>
        </main>
    )
}

export default InProgress;