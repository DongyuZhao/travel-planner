export interface IEventTime {
    date: string;
    time: string;
}

export interface IServiceTime {
    start: string;
    end: string;
    appendix: string;
}

export interface ICommuteStation {
    name: string;
    sub: string;
    type: 'Air' | 'Bus' | 'Coach' | 'Tram' | 'Train' | 'Ferry';
}

export interface IPlaceInfo {
    cardType: 'PlaceInfo';
    name: string;
    type: 'Natural' | 'Historical' | 'Modern' | 'Religion' | 'Entertainment' | 'Residence' | 'Restaurant';
    address: string;
    serviceTime: IServiceTime;
    note?: string;
}

export interface ITransport {
    type: 'Air' | 'Bus' | 'Coach' | 'Tram' | 'Train' | 'Ferry';
    no: number;
    carrier: string;
}

export interface IAircraft extends ITransport {
    type: 'Air';
    model: string;
}

export interface IGroundTransport extends ITransport {
    type: 'Bus' | 'Coach' | 'Tram' | 'Train' | 'Ferry';
    serviceTime: IServiceTime;
    time: string;
}

export interface ITransferInfo {
    cardType: 'TransferInfo';
    from: ICommuteStation;
    to: ICommuteStation;
    time: string;
    note?: string;
}

export interface IFlightInfo {
    cardType: 'FlightInfo';
    aircraft: IAircraft;
    from: ICommuteStation;
    to: ICommuteStation;
    departureTime: IEventTime;
    arrivalTime: IEventTime;
    note?: string;
}

export interface IGroundTransportInfo {
    cardType: 'GroundTransportInfo';
    transport: IGroundTransport;
    from: ICommuteStation;
    to: ICommuteStation;
    note?: string;
}

export interface ITimelineSection {
    type: 'Boat' | 'Bus' | 'Camera' | 'Flight' | 'Hotel' | 'Metro' | 'Restaurant' | 'Train' | 'Tram' | 'Transfer';
    card: IGroundTransportInfo | IFlightInfo | ITransferInfo | IPlaceInfo;
}

export interface ITimeline {
    sections: ITimelineSection[];
}
