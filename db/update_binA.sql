UPDATE shelf_a SET name = $2, price = $3 WHERE bin_id = $1;
SELECT * FROM shelf_a WHERE bin_id = $1;