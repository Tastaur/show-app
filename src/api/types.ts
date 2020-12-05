export interface showFromApi {
    id: number,
    url: string,
    name: string,
    type: string,
    language: string,
    genres: string[],
    status: string,
    runtime: number,
    premiered: string,
    officialSite: string,
    time: string,
    schedule: showSchedule,
    rating: showRating,
    weight: number,
    network: showNetwork,
    //TODO fix after testing fetch result
    webChannel: any,
    externals: showExternals,
    image: showImage,
    summary: string,
    updated: number,
    _link: showLinks
}


export interface showSchedule {
    time: string,
    days: string[]
}

export interface showRating {
    average: number
}

export interface showNetwork{
    id: number,
    name: string,
    country: country
}

export interface country {
    name: string,
    code: string,
    timezone: string
}

export interface showExternals {
    tvrage: number,
    thetvdb: number,
    imdb: string
}

export interface showImage {
    medium: string,
    original: string
}

export interface showLinks{
    self: link,
    previousepisode: link
}


export interface link {
    href: string
}
