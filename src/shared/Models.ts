import { 
    IAircraft, 
    ICommuteStation, 
    IEventTime, 
    IFlightInfo, 
    IGroundTransport, 
    IGroundTransportInfo, 
    IPlaceInfo, 
    IServiceTime,
    ITimelineSection, 
    ITransferInfo 
} from './Interfaces';

export class EventTimeModel {
    public static create(json: any): IEventTime {
        return {
            date: json.date,
            time: json.time,
        };
    }
}

export class ServiceTimeModel {
    public static create(json: any): IServiceTime {
        return {
            start: json.start,
            end: json.end,
            appendix: json.appendix,
        };
    }
}

export class CommuteStationModel {
    public static create(json: any): ICommuteStation {
        return {
            name: json.name,
            sub: json.sub,
            type: json.type,
        };
    }
}

export class PlaceInfoModel {
    public static create(json: any): IPlaceInfo {
        return {
            cardType: 'PlaceInfo',
            name: json.name,
            type: json.type,
            address: json.address,
            serviceTime: ServiceTimeModel.create(json.serviceTime),
            note: json.note
        };
    }
}

export class AircraftModel {
    public static create(json: any): IAircraft {
        return {
            type: json.type,
            no: json.no,
            carrier: json.carrier,
            model: json.model,
        };
    }
}

export class GroundTransportModel {
    public static create(json: any): IGroundTransport {
        return {
            type: json.type,
            no: json.no,
            carrier: json.carrier,
            time: json.time,
            serviceTime: ServiceTimeModel.create(json.serviceTime),
        };
    }
}

export class TransferInfoModel {
    public static create(json: any): ITransferInfo {
        return {
            cardType: 'TransferInfo',
            from: CommuteStationModel.create(json.from),
            to: CommuteStationModel.create(json.to),
            time: json.time,
            note: json.note,
        };
    }
}

export class FlightInfoModel {
    public static create(json: any): IFlightInfo {
        return {
            cardType: 'FlightInfo',
            aircraft: AircraftModel.create(json.aircraft),
            from: CommuteStationModel.create(json.from),
            to: CommuteStationModel.create(json.to),
            departureTime: EventTimeModel.create(json.departureTime),
            arrivalTime: EventTimeModel.create(json.arrivalTime),
            note: json.note,
        };
    }
}

export class GroundTransportInfoModel {
    public static create(json: any) : IGroundTransportInfo {
        return {
            cardType: 'GroundTransportInfo',
            transport: GroundTransportModel.create(json.transport),
            from: CommuteStationModel.create(json.from),
            to: CommuteStationModel.create(json.to),
            note: json.note,
        };
    }
}

export class TimelineSectionModel {
    public static create(json: any) : ITimelineSection {
        return {
            type: json.type,
            card: json.card
        };
    }
}
