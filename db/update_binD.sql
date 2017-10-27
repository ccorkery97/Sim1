UPDATE shelf_d SET name = $2, price = $3 WHERE bin_id = $1;
SELECT * FROM shelf_d WHERE bin_id = $1;