# Machine Learning Weather Image Classification

## Summary

---


This is an image classification Neural Network which looks at picures to determine what type of weather is occuring in them.  This could be used for a variety of applications including but not limited to
- computer vision and prediction of road and human conditions in automatic driving situations
- remote data acquisition for scientific research 
- accessibility applications for the blind and handicapped for quick assessment of outside conditions

this further delves into remote weather analysis using publicly broadcast traffic cameras

---

## Image dataset
the current data was published by University of South Africa, https://data.mendeley.com/datasets/4drtyfjtfy/1

---

## Classification

For simplicity due to difficulty of collecting well labeled data for the timeframe this project was completed in the data was simply clasified into 3 classes
- Sunny
- Cloudy
- Rainy

---

## Data Pre-Processing

There were 2 stages of data prep initial uniform preprocessing and random augmentation preprocessing.

The initial preprocessing rendered every picture into 240x240 px picture to produce a uniform size, then there was a training-validation split with a 4:1 ratio of training to validation samples.

The random preprocessing was a series of brightness, contrast rotation and zoom filters to provide additional variety to the relatively limited dataset of under 1000 samples

---

## TensorFlow Model

The Tensorflow bodel used was a sequential neural network using the keras framework.  It had a series of 3 progresively larger 2d conversion-pooling sequences before a flatten layer and simple relu activation function.

This provided a trainable model with 7.4 million trainable parameters.

The final product had an accuracy of 87% and loss of 0.48 on testing.

---

## Flask application


---

## Citations
Ajayi, Gbeminiyi (2018), “Multi-class Weather Dataset for Image Classification”, Mendeley Data, V1, doi: 10.17632/4drtyfjtfy.1