const connection = require("../config/connection");

const RoomType = {
    selectAll: (cb) => {
        const queryString = "SELECT room_type_id, type, rate FROM room_types ORDER BY room_type_id ASC;";
        connection.query(queryString, (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },
    selectOne: (id, cb) => {
        const queryString = "SELECT room_type_id, type, rate FROM room_types WHERE room_type_id=? ORDER BY room_type_id ASC LIMIT 1;";
        connection.execute(queryString, [id], (err, results, fields) => {
            if (err) throw err;
            cb(results);
        });
    },
    selectAvailable: (date, cb) => {
        const preQueryString = "SET @input_date=?;";
        const queryString = "SELECT rm3.date, COALESCE(SUM(rm3.rt1), 0) AS RoomType1, COALESCE(SUM(rm3.rt2), 0) AS RoomType2, COALESCE(SUM(rm3.rt3), 0) AS RoomType3, COALESCE(SUM(rm3.rt1)+SUM(rm3.rt2)+SUM(rm3.rt3), 0) AS TotalRooms FROM (SELECT (@input_date) AS date, CASE WHEN rm2.room_type_id=1 THEN rm2.total END AS rt1, CASE WHEN rm2.room_type_id=2 THEN rm2.total END AS rt2, CASE WHEN rm2.room_type_id=3 THEN rm2.total END AS rt3 FROM (SELECT COUNT(*) AS total, rm1.room_type_id FROM (SELECT rm.room_type_id FROM rooms AS rm WHERE rm.active=1 && rm.room_id NOT IN (SELECT rr.room_id FROM res_rooms AS rr WHERE rr.check_in_date<=@input_date && rr.check_out_date>@input_date)) AS rm1 GROUP BY rm1.room_type_id) AS rm2) AS rm3 GROUP BY rm3.date UNION ALL SELECT rm3.date, COALESCE(SUM(rm3.rt1), 0) AS RoomType1, COALESCE(SUM(rm3.rt2), 0) AS RoomType2, COALESCE(SUM(rm3.rt3), 0) AS RoomType3, COALESCE(SUM(rm3.rt1)+SUM(rm3.rt2)+SUM(rm3.rt3), 0) AS TotalRooms FROM (SELECT (DATE_ADD(@input_date, INTERVAL 1 DAY)) AS date, CASE WHEN rm2.room_type_id=1 THEN rm2.total END AS rt1, CASE WHEN rm2.room_type_id=2 THEN rm2.total END AS rt2, CASE WHEN rm2.room_type_id=3 THEN rm2.total END AS rt3 FROM (SELECT COUNT(*) AS total, rm1.room_type_id FROM (SELECT rm.room_type_id FROM rooms AS rm WHERE rm.active=1 && rm.room_id NOT IN (SELECT rr.room_id FROM res_rooms AS rr WHERE rr.check_in_date<=DATE_ADD(@input_date, INTERVAL 1 DAY) && rr.check_out_date>DATE_ADD(@input_date, INTERVAL 1 DAY))) AS rm1 GROUP BY rm1.room_type_id) AS rm2) AS rm3 GROUP BY rm3.date UNION ALL SELECT rm3.date, COALESCE(SUM(rm3.rt1), 0) AS RoomType1, COALESCE(SUM(rm3.rt2), 0) AS RoomType2, COALESCE(SUM(rm3.rt3), 0) AS RoomType3, COALESCE(SUM(rm3.rt1)+SUM(rm3.rt2)+SUM(rm3.rt3), 0) AS TotalRooms FROM (SELECT (DATE_ADD(@input_date, INTERVAL 2 DAY)) AS date, CASE WHEN rm2.room_type_id=1 THEN rm2.total END AS rt1, CASE WHEN rm2.room_type_id=2 THEN rm2.total END AS rt2, CASE WHEN rm2.room_type_id=3 THEN rm2.total END AS rt3 FROM (SELECT COUNT(*) AS total, rm1.room_type_id FROM (SELECT rm.room_type_id FROM rooms AS rm WHERE rm.active=1 && rm.room_id NOT IN (SELECT rr.room_id FROM res_rooms AS rr WHERE rr.check_in_date<=DATE_ADD(@input_date, INTERVAL 2 DAY) && rr.check_out_date>DATE_ADD(@input_date, INTERVAL 2 DAY))) AS rm1 GROUP BY rm1.room_type_id) AS rm2) AS rm3 GROUP BY rm3.date UNION ALL SELECT rm3.date, COALESCE(SUM(rm3.rt1), 0) AS RoomType1, COALESCE(SUM(rm3.rt2), 0) AS RoomType2, COALESCE(SUM(rm3.rt3), 0) AS RoomType3, COALESCE(SUM(rm3.rt1)+SUM(rm3.rt2)+SUM(rm3.rt3), 0) AS TotalRooms FROM (SELECT (DATE_ADD(@input_date, INTERVAL 3 DAY)) AS date, CASE WHEN rm2.room_type_id=1 THEN rm2.total END AS rt1, CASE WHEN rm2.room_type_id=2 THEN rm2.total END AS rt2, CASE WHEN rm2.room_type_id=3 THEN rm2.total END AS rt3 FROM (SELECT COUNT(*) AS total, rm1.room_type_id FROM (SELECT rm.room_type_id FROM rooms AS rm WHERE rm.active=1 && rm.room_id NOT IN (SELECT rr.room_id FROM res_rooms AS rr WHERE rr.check_in_date<=DATE_ADD(@input_date, INTERVAL 3 DAY) && rr.check_out_date>DATE_ADD(@input_date, INTERVAL 3 DAY))) AS rm1 GROUP BY rm1.room_type_id) AS rm2) AS rm3 GROUP BY rm3.date UNION ALL SELECT rm3.date, COALESCE(SUM(rm3.rt1), 0) AS RoomType1, COALESCE(SUM(rm3.rt2), 0) AS RoomType2, COALESCE(SUM(rm3.rt3), 0) AS RoomType3, COALESCE(SUM(rm3.rt1)+SUM(rm3.rt2)+SUM(rm3.rt3), 0) AS TotalRooms FROM (SELECT (DATE_ADD(@input_date, INTERVAL 4 DAY)) AS date, CASE WHEN rm2.room_type_id=1 THEN rm2.total END AS rt1, CASE WHEN rm2.room_type_id=2 THEN rm2.total END AS rt2, CASE WHEN rm2.room_type_id=3 THEN rm2.total END AS rt3 FROM (SELECT COUNT(*) AS total, rm1.room_type_id FROM (SELECT rm.room_type_id FROM rooms AS rm WHERE rm.active=1 && rm.room_id NOT IN (SELECT rr.room_id FROM res_rooms AS rr WHERE rr.check_in_date<=DATE_ADD(@input_date, INTERVAL 4 DAY) && rr.check_out_date>DATE_ADD(@input_date, INTERVAL 4 DAY))) AS rm1 GROUP BY rm1.room_type_id) AS rm2) AS rm3 GROUP BY rm3.date;";
        connection.query(preQueryString + queryString, [date], (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },
    deleteOne: (id, cb) => {
        const queryString = "DELETE FROM room_types WHERE room_type_id=?;";
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (vals, cb) => {
        const queryString = "INSERT INTO room_types (type, rate) VALUES (?,?);";
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (vals, id, cb) => {
        vals.push(id);
        const queryString = "UPDATE room_types SET type=?, rate=? WHERE room_type_id=?;";
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = RoomType;