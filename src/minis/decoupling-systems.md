---
title: "Decoupling systems"
date: "Aug 30, 2024"
---

# Eigenvectors and Eigenvalues
Before we look at decoupling matrices, we should take a second to understand *what* an eigenvector for some linear transformation $A$ is. By definition, some vector $\mathbf{v} \neq \mathbf{0}$ is an eigenvector of a linear map $A$ if 
$$A\mathbf{v} = \lambda \mathbf{v}$$
for some constant $\lambda$. In essence, this means that the *direction* of $v$ is unchanged when the map $A$ is applied to it. Rearranging our equation, we find another form of this definition:
$$(A - \lambda I) \mathbf{v} = \mathbf{0}$$
Because $\mathbf{v}$ is, by definition, not the zero vector, the above equation means that the map $A - \lambda I$ has a non-trivial nullspace, and therefore, is a singular matrix. The determinant of it must, by the TFAE, be equal to 0.
$$\text{det} (A - \lambda I) = 0$$
The above determinant yields an equation known as the *characteristic polynomial*, which will be of order $n$ for an $n \times n$ matrix. This is how eigenvalues (and, through substitution, eigenvectors) are found in practice. 

These eigenvectors are somehow special to this mapping $A$. In order to produce a coordinate transformation to simplify calculations with the map, it would intuitively make sense to transform these eigenvectors into the *basis unit vectors*. We'll revisit this idea later. 

# Coupled and Decoupled Systems
A linear system of differential equations is a system of the form 
$$\mathbf{x}' = A \mathbf{x}$$
When $A$ is a *diagonal* matrix, like 
$$A = \begin{bmatrix} a & 0 \\ 0 & b \end{bmatrix}$$
then the system is said to be *decoupled*, as we'd end up with a system looking like 
$$\begin{bmatrix} x_1 \\ x_2 \end{bmatrix}' = \begin{bmatrix} a & 0 \\ 0 & b \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} \Longrightarrow x_1' = ax_1, x_2' = bx_2$$
$x_1$ and its derivatives have no dependence on $x_2$, and likewise, $x_2$ and its derivatives have no dependence on $x_1$. Decoupled systems are extremely easy to solve, as we can just guess the proper exponential. 

The goal, then, is to introduce some coordinate system $(u, v)$ that is related to the $(x_1, x_2)$ via some decoupling matrix $D$, such that we may obtain "easy" solutions for $(u, v)$ that can be plugged in to find the solution set $(x_1, x_2)$. We define the mappings
$$\begin{bmatrix} u \\ v \end{bmatrix} = D\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} $$
$$\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = D^{-1}\begin{bmatrix} u \\ v \end{bmatrix}$$
where $D$ stands for "decoupling matrix." 

Revisiting our idea from earlier about mapping the eigenvectors of $A$ to $(u, v)$, suppose the $D^{-1}$ is the eigenvector matrix of $A$. 
$$D^{-1} = \begin{bmatrix} a_1 & a_2 \\ b_1 & b_2\end{bmatrix}$$
When $(u, v) = (1, 0)$, we get the first eigenvector of our original transformation. Likewise, when $(u, v) = (0, 1)$, we get our second eigenvector. 

# Proof
Why does this method work? First, we consider what the matrix $D^{-1}$ actually does. By definition, when we apply $A$ to the first column of $D^{-1}$ (in other words, its first eigenvector), we get 
$$A\begin{bmatrix} a_1 \\ b_1 \end{bmatrix} = \lambda_1 \begin{bmatrix} 1 \\ 0 \end{bmatrix} $$
And likewise, 
$$A\begin{bmatrix} a_2 \\ b_2 \end{bmatrix} = \lambda_2 \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$
We can put these together into a unified, matrix representation.
$$A \begin{bmatrix} a_1 & a_2 \\ b_1 & b_2 \end{bmatrix} = \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2\end{bmatrix}$$
$$A D^{-1} = D^{-1} \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2\end{bmatrix}$$

We now substitute $\mathbf{x} = D^{-1} \begin{bmatrix} u \\ v \end{bmatrix}$ into our original linear system:
$$\mathbf{x}' = A \mathbf{x}$$
$$D^{-1} \begin{bmatrix} u \\ v \end{bmatrix}' = A D^{-1} \begin{bmatrix} u \\ v \end{bmatrix}$$
Recall that 
$$A D^{-1} = D^{-1} \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2\end{bmatrix}$$
Substituting this in, we get 
$$D^{-1} \begin{bmatrix} u \\ v \end{bmatrix}' = D^{-1} \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2\end{bmatrix} \begin{bmatrix} u \\ v \end{bmatrix}$$
Now, we may just leftiply both sides by the matrix $D$, which leaves us with the system 
$$\begin{bmatrix} u \\ v \end{bmatrix}' = \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix} \begin{bmatrix} u \\ v\end{bmatrix}$$
which is, indeed, a decoupled system. Furthermore, this new set of coordinates $(u, v)$ are called the canonical variables of our system. Since we now have a correspondence between $(u, v)$ and the initial variables in our linear system, we can solve the simplifed, decoupled system in $(u, v)$ and find the solutions $(x_1, x_2)$ utilizing this information. 