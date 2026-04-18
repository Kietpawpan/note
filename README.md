## DELAY
```
Rate = Level*DELAY("Fraction",10)
```
10 is delay time (conveyor delay): If Fraction is 10, it will be 0 until time 10 and suddenly change to 10 after time 10. The smaller the time step, the closer to the delay time the value is activated. 

## IF THEN ELSE
```
Constant = IF(Time<10, 0.01/year, 0/year)
```
