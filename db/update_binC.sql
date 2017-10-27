UPDATE shelf_c SET name = $2, price = $3 WHERE bin_id = $1;
SELECT * FROM shelf_c WHERE bin_id = $1;