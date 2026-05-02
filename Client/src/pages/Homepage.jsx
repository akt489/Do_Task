import Cards from "../components/Cards";

function Homepage() {
    const styles = {
        item: {
            cursor: "pointer",
        },
        link: {
            color: "white",
            textDecoration: "none",
        },
    };

    return (
        <div>

            {/* CARDS */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
                <Cards
                    title={"Habit"}
                    description={"try to build your new skill for better you"}
                    image={"#"}
                />
                <Cards
                    title={"Tasks"}
                    description={"make your day productive"}
                    image={"#"}
                />
                <Cards
                    title={"Analysis"}
                    description={"See your progress"}
                    image={"#"}
                />
            </div>
        </div>
    );
}

export default Homepage;
