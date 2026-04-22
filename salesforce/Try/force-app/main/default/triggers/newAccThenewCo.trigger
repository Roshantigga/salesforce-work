trigger newAccThenewCo on Account (after insert) {
    List<Contact> co = new List<Contact>();
    for(Account acc : Trigger.new) {
        Contact con = new contact();
        con.LastName = acc.Name;
        con.Phone = acc.Phone;
        con.AccountId = acc.Id;

        co.add(con);
    }
    if(!co.isEmpty()) {
        insert co;
    }
}