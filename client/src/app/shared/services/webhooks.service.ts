import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

// import { DataService } from '../../core/data.service';

@Injectable()
export class WebhooksService {
    public webhooks$;
    private _dataObserver;
    private _dataStore;
    private _getInProgress = false;

    constructor(
        // private _data: DataService
    ) {
      this.webhooks$ = new Observable(observer => this._dataObserver = observer).pipe(share());
        this._dataStore = [];
    }

    // create (data) {
    //     return this._data.post('v3/webhooks', data).toPromise()
    //         .then(
    //             response => {
    //                 data.id = response.json().data.id;
    //                 this._include(data);
    //                 this._dataObserver.next(this._dataStore);
    //                 return data;
    //             },
    //             error => {
    //                 throw error.json();
    //             });
    // }

    // get () {
    //     // If get() is already running by someone else, don't run it again
    //     if (!this._getInProgress && this._dataStore.length === 0) {
    //         this._getInProgress = true;

    //         return this._data.get('v3/webhooks')
    //             .pipe(map(res => res.json().data))
    //             .subscribe(data => {
    //                 // Set the new data and broadcast it to all listeners
    //                 this._dataStore = data;
    //                 this._dataObserver.next(this._dataStore);
    //                 this._getInProgress = false;
    //             }, error => console.error('Unable to fetch mail templates', error))
    //         ;
    //     } else {
    //         // Just send the data we have
    //         this._dataObserver.next(this._dataStore);
    //     }
    // }

    // getEvents() {
    //   return this._data.get('v3/webhooks/log')
    //     .pipe(map(response => response.json().data))
    //     .toPromise();
    // }

    // delete (id) {
    //     return new Promise<void>((resolve, reject) => {
    //         this._data.delete(`v3/webhooks/${id}`)
    //             .subscribe(
    //                 () => {
    //                     this._exclude(id);
    //                     this._dataObserver.next(this._dataStore);
    //                     resolve();
    //                 },
    //                 error => {
    //                     reject(error.json());
    //                 });
    //     });
    // }

    private _include(item) {
        this._dataStore =
            this._dataStore
                .filter(b => b.id !== item.id)
                .concat(item);
    }

    private _exclude(id) {
        this._dataStore = this._dataStore.filter(b => b.id !== id);
    }
}
