<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

// class HousekeepingResource extends ResourceCollection
class HousekeepingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'status1' => $this->status_room,
            'status2' => $this->status_room2,
            'compliment' => $this->compliment_hu,
            'room_block' => $this->block_status_code,
            'building' => $this->building,
            'floor' => $this->floor,
            'room_number' => $this->number,
            'room_type' => $this->room_type,
            'room_view' => $this->room_view,
            'is_smoking' => $this->is_smoking,
            'guest_info' => $this->guest_info,
            'group' => $this->group,
            'date_arrival' => $this->date_arrival,
            'date_departure' => $this->date_departure,
            'remark' => $this->remark,
            'house_keeping_note' => $this->house_keeping_note,
            'nr_number' => $this->nr_number,
            'nr_guest_name' => $this->nr_guest_name,
            'nr_arrival_date' => $this->nr_date_arrival,
            'nr_house_keeping_note' => $this->nr_house_keeping_note,
            'lc_number' => $this->lc_number,
            'lc_guest_name' => $this->lc_guest_name,
            'lc_date_departure' => $this->lc_date_departure,
            'rb_status' => $this->rb_status,
            'is_unavailable' => $this->is_unavailable,
            'is_occupied' => $this->is_occupied,
            'is_blocked' => $this->is_blocked,
            'id_log' => $this->id_log,
            'ID_log' => $this->ID_log,
            'user_id' => $this->user_id,
        ];
    }
}
