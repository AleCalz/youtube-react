export default function Menu() {
    // list renfering
    const menuItems = [
        { icon: '🏠', text: 'Home'},
        { icon: '🩳', text: 'Shorts'},
        { icon: '💕', text: 'Subscriptions'}
    ]
    return (
        // list rendering
        <aside id="menu">
            
            {/* <div className="menu-item">
                <span>🩳</span>
                <span>Shorts</span>
            </div>
            <div className="menu-item">
                <span>⏰</span>
                <span>Subscriptions</span>
            </div> */}

            {/* para ocupar JS es entre llaves */}
            {/* Es importante pasarle la keey y que esta a su vez sea unica para cada elemento*/}
            {
                menuItems
                // .filter((item) => !item.text.startsWith('S')) que no empiecen con s
                // .filter((item) => item.text.startsWith('S')) que empiecen con s
                .map((item) => {
                    return (
                        <div key={`menu-item-${item.text}`} className="menu-item">
                            <span>{item.icon}</span>
                            <span>{item.text}</span>
                        </div>
                    )
                })
            }
        </aside>
    )
}