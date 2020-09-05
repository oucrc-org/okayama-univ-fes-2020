export function getClubs() {
    return [
        {
            "title": "oucrc"
        },
        {
            "title": "circle"
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