trigger createAccthenCo on Account (after insert) {
    if (Trigger.isAfter && Trigger.isInsert) {
        Ex1.createContacts(Trigger.new);
    }
}