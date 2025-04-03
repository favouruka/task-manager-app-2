/* General Page Styling */
body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    text-align: center;
    margin: 0;
    padding: 20px;
}

/* Header */
h1 {
    color: #333;
}

/* Input and Button */
input {
    padding: 10px;
    width: 60%;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

/* Task List */
ul {
    list-style-type: none;
    padding: 0;
}

li {
    background: white;
    margin: 10px auto;
    padding: 10px;
    width: 60%;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Completed Task Styling */
.completed {
    text-decoration: line-through;
    color: gray;
}
