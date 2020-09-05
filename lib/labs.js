export function getLabs() {
    return [
        {
            "title": "lab1",
            "image": "/president.jpg"
        },
        {
            "title": "lab2",
            "image": "/president.jpg"
        },
        {
            "title": "lab3",
            "image": "/president.jpg"
        },
        {
            "title": "lab4",
            "image": "/president.jpg"
        },
        {
            "title": "lab5",
            "image": "/president.jpg"
        },
        {
            "title": "lab6",
            "image": "/president.jpg"
        },
    ];
}

export function getLabIds() {
    return getLabs().map(it => {
        return {
            params: {
                id: it.title
            }
        }
    });
}

export function getLab(title) {
    const lab = getLabs().find(it => it.title === title);

    return {
        id: lab.title,
        ...lab
    };
}