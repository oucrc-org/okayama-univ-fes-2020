import axios from 'axios';

export async function getClubs() {
    const res = await axios.get(process.env.CLUBS_URL);
    return res.data;
}

export async function getClubIds() {
    const clubs = await getClubs();
    return clubs.map(it => {
        return {
            params: {
                id: it.id
            }
        }
    });
}

export async function getClub(id) {
    const clubs = await getClubs();
    const club = clubs.find(it => it.id === id);

    return {
        id: club.id,
        ...club
    };
}

export function getCategories(){
    return [
        {
            key: 'sports_club',
            value: '部活動（体育系）'
        },
        {
            key: 'cultural_club',
            value: '部活動（文化系）'
        },
        {
            key: 'cultural_circle',
            value: '公認サークル（文化系）'
        },
        {
            key: 'other',
            value: 'その他'
        },
    ]
}