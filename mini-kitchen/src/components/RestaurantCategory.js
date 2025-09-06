const RestaurantCategory = (res) => {
    console.log("category res", res.category.card.card.title);
    return (
        <div>
            {/**Accordion Header */}
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 flex justify-between">
                <span className="font-bold text-lg">
                    {res.category.card.card.title}
                </span>
            </div>
            {/**Accordion Body */}
        </div>
    );
};

export default RestaurantCategory;