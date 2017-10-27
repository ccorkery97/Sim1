UPDATE shelf_b SET name = $2, price = $3 WHERE bin_id = $1;
SELECT * FROM shelf_b WHERE bin_id = $1;