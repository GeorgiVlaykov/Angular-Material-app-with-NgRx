import { Component, OnInit } from '@angular/core';
import { Exercise } from './exercise.model';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining: boolean = false;
  exerciseSubscription: Subscription;
  constructor(private trainingService: TrainingService) {}

  ngOnDestroy(): void {
    if (this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(
      (exercise) => {
        if (exercise) {
          this.ongoingTraining = true;
        } else {
          this.ongoingTraining = false;
        }
      }
    );
  }

  closeTraining() {
    console.log('close training');
    this.ongoingTraining = false;
  }
}
