export function getClubs() {
    return [
        {
            "title": "circle1",
            "image": "clubs.jpg"
        },
        {
            "title": "circle2",
            "image": "clubs.jpg"
        },
        {
            "title": "circle3",
            "image": "clubs.jpg"
        },
        {
            "title": "circle4",
            "image": "clubs.jpg"
        },
        {
            "title": "circle5",
            "image": "clubs.jpg"
        },
        {
            "title": "circle6",
            "image": "clubs.jpg"
        },
    ];
}

export function getClubIds() {
    return getClubs().map(it => {
        return {
            params: {
                id: it.title
            }
        }
    });
}

export function getClub(title) {
    const club = getClubs().find(it => it.title === title);

    return {
        id: club.title,
        ...club
    };
}