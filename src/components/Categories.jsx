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
        <div className="flex flex-row gap-4">
            {
                categories.map((category) => {
                    return (
                        <span key={`categories-${category}`} className="py-2 px-4 rounded-3xl bg-[#282828]">
                            {category}
                        </span>
                    )
                })
            }
        </div>
    )
}