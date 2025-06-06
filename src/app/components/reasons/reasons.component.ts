import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-reasons',
  standalone: false,
  templateUrl: './reasons.component.html',
  styleUrl: './reasons.component.scss'
})
export class ReasonsComponent implements OnInit, OnDestroy, AfterViewInit{
  @ViewChild('numbersSection') numbersSection!: ElementRef;

  targetNumbers: number[] = [26400, 60, 20, 15];
  currentNumbers: number[] = [0, 0, 0, 0];

  animationDuration: number = 2000;
  private observer!: IntersectionObserver;
  private animationStarted: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.currentNumbers = this.targetNumbers.map(() => 0);
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animationStarted) {
          this.startAllNumberAnimations();
          this.animationStarted = true;
          this.observer.disconnect();
        }
      });
    }, options);

    if (this.numbersSection) {
      this.observer.observe(this.numbersSection.nativeElement);
    }
  }

  private startAllNumberAnimations(): void {
    this.targetNumbers.forEach((target, index) => {
      this.animateNumber(index, target);
    });
  }

  private animateNumber(index: number, target: number): void {
    let startTime: number | null = null;
    const initialValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = (currentTime - startTime) / this.animationDuration;

      if (progress < 1) {
        this.currentNumbers[index] = Math.floor(initialValue + (target - initialValue) * progress);
        this.currentNumbers = [...this.currentNumbers];
        requestAnimationFrame(animate);
      } else {
        this.currentNumbers[index] = target;
        this.currentNumbers = [...this.currentNumbers];
      }
    };
    requestAnimationFrame(animate);
  }

}
