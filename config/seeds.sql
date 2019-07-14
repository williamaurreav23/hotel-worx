set foreign_key_checks=0;

-- --------------------------------------------------------

--
-- Seed data for users
--

DELETE FROM users;

INSERT INTO users (username, password, access_id) VALUES
('admin', '$2b$10$Qf/0VNBQiYr.pHN8IN9Yl.SrYQCpG4b2mrsX6dx85DkE7/fwsNWvy', 3),
('manager', '$2b$10$2ataQ4kjDbZaR9TDSUqXI.Mt.Gq/bDn1Te3MN939s3fJAtTrKJa9i', 2),
('vince', '$2b$10$HEj.issBvH6pxDEiBxtCr.c8fU7Cl4TC34K4/MGtTMdXqztLyqt8K', 3),
('user', '$2b$10$rnUz2cFk61G27KdixeR5G.rf78zaKzDZlebrs9ZK5tnnVGFWrnUPm', 1);

 -- pw admin
 -- pw 123456
 -- pw 654321
 -- pw 123123

-- --------------------------------------------------------

--
-- Seed data for access_levels
--

DELETE FROM access_levels;

INSERT INTO access_levels (access_id, type) VALUES
(1, 'Employee'),
(2, 'Manager'),
(3, 'Administrator');

-- --------------------------------------------------------

--
-- Seed data for customers
--

DELETE FROM customers;

INSERT INTO customers (first_name,last_name, address, city, state, zip, email, phone, credit_card_num, cc_expiration, active) VALUES
('John', 'Doe', '123 Main St', 'Columbus', 'Ohio', '44000', 'some_email@test.com', '614-555-1212', '1234567890123456', '02-21', 1),
('Mary', 'Smith', '456 Lusard Rd', 'Euclid', 'Ohio', '44000', 'mary_i_am@test.com', '216-555-1212', '1234567890123456', '10-23', 1),
('Michelle', 'Williams', '21234 Nile Ave Apt 4', 'Cleveland', 'Ohio', '44000', 'michelle@test.com', '440-555-1212', '1234567890123456', '08-20', 1),
('Peter', 'Pan', '321 North Ave', 'Akron', 'Ohio', '44000', 'some_email@test.com', '330-555-1212', '1234567890123456', '08-21', 1),
('Joan', 'Petrick', '40112 Liberty Rd', 'Toledo', 'Ohio', '44000', 'joan_i_am@test.com', '419-555-1212', '1234567890123456', '10-23', 1),
('Robert', 'Norris', '21039 SOM Center Rd', 'Pepper Pike', 'Ohio', '44000', 'blah@test.com', '440-555-1212', '1234567890123456', '04-20', 1),
('Terry', 'Baker', '6543 N Main St', 'Detoit', 'Michigan', '42000', 'some_email@test.com', '313-555-1212', '1234567890123456', '10-20', 1),
('Tim', 'Leary', '12345 Pleasant Terrace', 'My Town', 'Pennsylvania', '34000', 'tim_i_am@test.com', '614-555-1212', '1234567890123456', '04-21', 1),
('Mike', 'Dixon', '7612 West Blvd', 'Cleveland', 'Ohio', '44000', 'mike@test.com', '440-555-1212', '1234567890123456', '08-20', 1),
('Joseph', 'Taylor', '456 Lusard Rd', 'Eastlake', 'Ohio', '44000', 'joe_i_am@test.com', '440-555-1212', '1234567890123456', '11-22', 1),
('Paul', 'Jackson', '2030 Euclid Ave', 'Boardman', 'Ohio', '44000', 'pj1234@test.com', '330-555-1212', '1234567890123456', '08-20', 1),
('Johnny', 'Palka', '10203 Dayton Rd', 'Chicago', 'Illinois', '32005', 'some_email@test.com', '847-555-1212', '1234567890123456', '02-21', 1),
('Keith', 'Jameson', '1498 Kensington Rd', 'Dayton', 'Ohio', '44000', 'keith_i_am@test.com', '614-555-1212', '1234567890123456', '10-23', 1),
('Margie', 'Robinson', '1738 SomeStreet Ave', 'SomeTown', 'Indiana', '41004', 'indy123@test.com', '440-555-1212', '1234567890123456', '08-20', 1);

-- --------------------------------------------------------

--
-- Seed data for rooms
--

DELETE FROM rooms;

INSERT INTO rooms (room_num, room_type_id, description, num_beds, clean, occupied, active) VALUES
('101', 1, 'microwave', 2, 1, 1, 1),
('102', 2, 'new carpet, refrigerator', 2, 1, 1, 1),
('103', 1, 'microwave', 2, 0, 0, 1),
('104', 3, '60-inch TV', 2, 1, 1, 1),
('105', 1, 'microwave, balcony', 2, 1, 0, 0),
('201', 1, 'microwave, courtyard view', 2, 1, 1, 1),
('202', 3, 'balcony, refrigerator', 2, 1, 1, 1),
('203', 1, 'courtyard view', 2, 1, 1, 1),
('204', 3, 'balcony', 2, 1, 1, 1),
('205', 2, 'microwave, courtyard view', 2, 1, 1, 1);

-- --------------------------------------------------------

--
-- Seed data for room_types
--

DELETE FROM room_types;

INSERT INTO room_types (room_type_id, type, rate) VALUES
(1, '2 Queens', 109.99),
(2, 'King', 119.99),
(3, 'Suite', 129.99);

-- --------------------------------------------------------

--
-- Seed data for reservations
--

DELETE FROM reservations;

INSERT INTO reservations (customer_id, user_id, comments) VALUES
(1, 3, ''),
(2, 2, ''),
(3, 1, ''),
(4, 3, ''),
(5, 2, ''),
(6, 1, ''),
(7, 3, ''),
(8, 2, ''),
(9, 1, ''),
(10, 3, ''),
(11, 2, ''),
(12, 1, ''),
(13, 2, ''),
(14, 1, '');

-- --------------------------------------------------------

--
-- Seed data for res_rooms
--

DELETE FROM res_rooms;

INSERT INTO res_rooms (reservation_id, room_type_id, check_in_date, check_out_date, checked_in, checked_out, adults, room_id, rate, confirmation_code, comments) VALUES
(1001, 3, '2019-07-13', '2019-07-18', 1, 0, 2, 7, 129.99, '190701001001', 'wants a good view'),
(1002, 1, '2019-07-12', '2019-07-16', 1, 0, 1, 1, 109.99, '190701002001', ''),
(1002, 1, '2019-07-17', '2019-07-19', 0, 0, 1, null, 109.99, '190701002002', 'needs a late checkout time'),
(1003, 2, '2019-09-26', '2019-09-30', 0, 0, 3, null, 119.99, '190702003001', ''),
(1004, 3, '2019-07-08', '2019-07-15', 1, 0, 2, 9, 129.99, '190702004001', 'wants a good view'),
(1005, 1, '2019-10-02', '2019-10-03', 0, 0, 1, null, 109.99, '190703005001', ''),
(1006, 1, '2019-10-02', '2019-10-05', 0, 0, 2, null, 109.99, '190703006001', 'needs a late checkout time'),
(1007, 2, '2019-08-06', '2019-08-12', 0, 0, 3, null, 119.99, '190703007001', ''),
(1008, 1, '2019-07-09', '2019-07-15', 1, 0, 2, 8, 109.99, '190704008001', 'wants a good view'),
(1009, 1, '2019-07-18', '2019-07-22', 0, 0, 1, null, 109.99, '190704009001', ''),
(1010, 1, '2019-07-12', '2019-07-15', 1, 0, 1, 6, 109.99, '190705010001', 'needs a late checkout time'),
(1011, 2, '2019-07-10', '2019-07-14', 1, 0, 2, 2, 119.99, '190705011001', ''),
(1012, 3, '2019-07-10', '2019-07-16', 1, 0, 2, 4, 129.99, '190705012001', 'wants a good view'),
(1013, 2, '2019-07-11', '2019-07-15', 1, 0, 2, 10, 119.99, '190705013001', ''),
(1013, 1, '2019-07-14', '2019-07-15', 0, 0, 1, null, 109.99, '190705013002', 'needs a late checkout time'),
(1014, 1, '2019-07-18', '2019-07-20', 0, 0, 3, null, 109.99, '190706014001', '');

-- --------------------------------------------------------

--
-- Seed data for tax_rates
--

DELETE FROM tax_rates;

INSERT INTO tax_rates (county_tax_rate, city_tax_rate, state_tax_rate) VALUES
(5.000, 3.000, 7.000);

-- --------------------------------------------------------

--
-- Seed data for hotel_info
--

DELETE FROM hotel_info;

INSERT INTO hotel_info (hotel_name, address, city, state, zip, email, phone, image_url, active) VALUES
('Regal Inn & Suites', '12345 E Main St', 'Cleveland', 'Ohio', '44114', 'info@regalinnandsuites.com', '216-555-1212', 'hotel.png', 1);

-- --------------------------------------------------------

set foreign_key_checks=1;