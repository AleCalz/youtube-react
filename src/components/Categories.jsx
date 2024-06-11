export default function Categories() {
    const categories = [
        "All",
        "Music",
        "Gaming",
        "Sport",
        "Code",
        "Programming",
        "Life Style"
    ]
    return (
        <div id="categories-list">
            {
                categories.map((category) => {
                    return (
                        <span key={`categories-${category}`} className="category">
                            {category}
                        </span>
                    )
                })
            }
        </div>
    )
}