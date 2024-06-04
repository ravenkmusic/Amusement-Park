/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
    let obj = {
      'name': name,
      'age': age,
      'ticketId': ticketId
    };
    return obj;
  }
  
  /**
   * Revokes a ticket for a visitor.
   *
   * @param {Visitor} visitor the visitor with an active ticket
   * @returns {Visitor} the visitor without a ticket
   */
  export function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor;
  }
  
  /**
   * Determines the status a ticket has in the ticket tracking object.
   *
   * @param {Record<string, string|null>} tickets
   * @param {string} ticketId
   * @returns {string} ticket status
   */
  export function ticketStatus(tickets, ticketId) {
    if (tickets[ticketId] === undefined){
      return 'unknown ticket id'
    } 
    if (tickets[ticketId] === null){
      return 'not sold'
    } 
    if (tickets[ticketId] !== null && tickets[ticketId] !== undefined) {
      let name = tickets[ticketId];
      return `sold to ${name}`
    }
  }
  
  /**
   * Determines the status a ticket has in the ticket tracking object
   * and returns a simplified status message.
   *
   * @param {Record<string, string|null>} tickets
   * @param {string} ticketId
   * @returns {string} ticket status
   */
  export function simpleTicketStatus(tickets, ticketId) {
    let statusMessage = null;
    statusMessage = tickets[ticketId] ?? 'invalid ticket !!!';
    return statusMessage
  }
  
  /**
   * Determines the version of the GTC that was signed by the visitor.
   *
   * @param {VisitorWithGtc} visitor
   * @returns {string | undefined} version
   */
  export function gtcVersion(visitor) {
    return visitor.gtc?.version
  }