# R reference



## Data types

```R
# Numerics:
4.5 
3

# Boolean
TRUE
FALSE

# String
"hello"

# Check data type
class(my_var)

```



## Basics

```R
my_var <- 4 # Assign a variable
```





## Math

* `%%` - modulo
* `^` - exponentiering



## Misc

* `summary()` - fakta om variabel
* `head()` - första biten av dataset.
* `tail()` - sista  biten av dataset.
* `str()` - struktur av dataset.
* `order()` - sortera.



## Vectors

```R
# Create a vector
my_vec <- c(1,2,3) # c() is the *combine* function

# Naming a vector
roulette_vector <- c(-24, -50, 100, -350, 10)
names(roulette_vector) <-  c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
# roulette_vector gives the output
#    Monday   Tuesday Wednesday  Thursday    Friday 
#      -24       -50       100      -350        10 
 

# Indexing
my_vec[1] # First element
 
my_vec[c(1,5)] # First and fifth element

my_vec[2:4] # Second until (including) fourth element

roulette_vector["Monday"] # Accessing by name


# Comparisons (work on vectors and returns a vector)
c(4, 5, 6) > 5
[1] FALSE FALSE TRUE

selection_vector <- poker_vector > 0 # Get days with positive returns
```

* Normal operators like summation work elementwise (vectors/matrices)
* `sum()` gives the sum of a vector



## Matrices

```R
# Create a matrix
matrix(1:9, byrow = TRUE, nrow = 3) # 1:9 and arrange into matrix with 3 rows

# Naming a matrix
rownames(my_matrix) <- row_names_vector
colnames(my_matrix) <- col_names_vector

# Summation
rowSums(my_matrix)
colSums(my_matrix)

# Merge matrices/vectors 
big_matrix <- cbind(matrix1, matrix2, vector1 ...) # By column
rbind(matrix1, matrix2) # By row

# Indexing
my_matrix[1:3,2:3] # First row then column

```



## *factors*

* A limited number of categories like man and woman

```R
sex_vector <- c("Male","Female","Female","Male","Male")
factor_sex_vector <- factor(sex_vector) # Encoding vector as factor instead of strings
```





## *data frame*

* Mixed data types in an object.
* "A data frame has the variables of a data set as columns and the observations as rows. "

* Created with `data.frame()`



## List

* "You could say that a list is some kind super data type: you can store practically any piece of information in it!"

```R
# Creating a list
my_list <- list(comp1, comp2 ...)

# Naming a list
my_list <- list(name1 = your_comp1, 
                name2 = your_comp2)

# Naming after creation
my_list <- list(your_comp1, your_comp2)
names(my_list) <- c("name1", "name2")

# Indexing is with double brackets for list
shining_list[[1]]

# Indexing with name
shining_list[["reviews"]]
shining_list$reviews

```

