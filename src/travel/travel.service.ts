import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';

@Injectable()
export class TravelService {
    private trips = [
    { id: 1, name: 'to china ', price: 9000 },
    { id: 2, name: 'to morocco ', price: 4000 },
  ];

  
 findAll() {
  return this.trips;
}


  
findOne(id: number) {
  return this.trips.find(trip => trip.id === id);
}


  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
