const connection = require("../config/connection");

const ResRoom = {
    selectAll: (cb) => {

    },
    selectTodayArrivalsDepartures: (condition, cb) => {
        const queryString = "SELECT r.reservation_id, CONCAT(c.first_name, ' ', c.last_name) AS name, rr.check_in_date, rr.check_out_date, rr.checked_in, rr.checked_out, rr.adults, rr.room_id FROM reservations AS r INNER JOIN customers AS c ON r.customer_id=c.customer_id INNER JOIN res_rooms AS rr ON r.reservation_id=rr.reservation_id INNER JOIN room_types AS rt ON rr.room_type_id=rt.room_type_id WHERE " + condition + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    selectSome: (id, cb) => {
        const queryString = "SELECT rr.res_room_id, rr.room_type_id, rr.check_in_date, rr.check_out_date, rr.checked_in, rr.checked_out, rr.adults, rr.room_id, rt.type, rt.rate FROM res_rooms AS rr INNER JOIN room_types AS rt ON rr.room_type_id=rt.room_type_id WHERE rr.reservation_id=?;";
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    deleteSome: (id, cb) => {
        const queryString = "DELETE FROM res_rooms WHERE reservation_id=?;";
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertSome: (vals, cb) => {
        const queryString = "INSERT INTO res_rooms (reservation_id, room_type_id, check_in_date, check_out_date, adults) VALUES (?,?,?,?,?);";
        vals.forEach(function (room) {
            connection.execute(queryString, room, (err, result) => {
                if (err) throw err;
                console.log(result.insertId);
            });
        });
        cb("finished inserting rooms");
    }
}

module.exports = ResRoom;